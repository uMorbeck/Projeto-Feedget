import express from 'express'
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackService } from './services/submit-feedback-service';

export const routes = express.Router()

routes.post("/feedbacks", async (req, res) => {

    const {type, comment, screenshot} = req.body //req.body.type , req.body.comment, req.body.screenshot
    const nodeMailerMailAdapter = new NodeMailerMailAdapter

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbacksRepository,
        nodeMailerMailAdapter
        )

    await submitFeedbackService.execute({
        type,
        comment,
        screenshot,
    })

    return res.status(201).send()
})