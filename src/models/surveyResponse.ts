import { User } from "./user";

export type SurveyResponse = {
    id: string;
    user: User;
    user_id: string;
    organizationSize: string;
    currentlyPaying: string;
    toolsImInterestedIn: string;
};
