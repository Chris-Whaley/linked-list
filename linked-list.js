function LinkedList(params) {
  let head = null;
  const linkedListEntries = {};
  this.value = null;
  this.nextNode = null;

  function append(value) {
    if (this.value == null) {
      head = value;
      linkedListEntries[value] = this.nextNode;
      this.value = value;
    } else {
      linkedListEntries[this.value] = value;
      linkedListEntries[value] = this.nextNode;
      this.value = value;
    }
  }

  return { linkedListEntries, append };
}

export { LinkedList };
