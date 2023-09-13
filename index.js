function superbowlWin(record) {
  const winObject = record.find(item => item.result === "W");
  if (winObject) {
    return winObject.year;
  }
  return undefined;
}