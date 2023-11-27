export class FormBuilder {
  root = {};
  addField(fieldName, value) {
    this.root[fieldName] = value;
    return this;
  }
}
