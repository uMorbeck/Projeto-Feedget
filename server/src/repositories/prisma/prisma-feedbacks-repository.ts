import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,       // type: type, => req.body.type                   ^
                comment,    // comment: comment => req.body.comment           ^
                screenshot, // screenshot: screenshot => req.body.screenshot  ^
            }
        })
    }
}