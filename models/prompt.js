import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    requried: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    requried: [true, "Tag is required."],
  },
});

const Prompt = models.prompt || model('Prompt', PromptSchema);

export default Prompt