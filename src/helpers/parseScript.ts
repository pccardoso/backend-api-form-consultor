export const parseScript = (fields, script) => {
  if (!Array.isArray(fields) || !script) {
    return '';
  }

  const fieldsMap = fields.reduce((acc, item) => {
    acc[item.name] = item.value;
    return acc;
  }, {});

  return script.replace(/{{(.*?)}}/g, (_, chave) => {
    const campo = chave.trim();
    return fieldsMap[campo] ?? '';
  });
}