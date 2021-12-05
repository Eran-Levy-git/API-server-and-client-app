const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pullRequestSchema = new Schema({
  pull_request : Object
}, { timestamps: true });

const PullRequest = mongoose.model('PullRequest', pullRequestSchema);
module.exports = PullRequest;