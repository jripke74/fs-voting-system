const poll = new Map();

function addOption(option) {
  if (option == "") {
    return "Option cannot be empty.";
  }
  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
  return `Option "${option}" already exists.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  if (poll.get(option).has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  poll.get(option).add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

addOption("OptionA");
addOption("OptionB");
addOption("OptionC");
vote("OptionA", 1);
vote("OptionA", 2);
vote("OptionA", 13);

function displayResults() {
  let s = "Poll Results:\n";
  poll.forEach((value, key) => (s += `${key}: ${value.size} votes`));
  return s;
}
