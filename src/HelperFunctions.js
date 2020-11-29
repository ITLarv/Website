export const extractTranslation = (content, lang) => {
	return content[lang] ? content[lang] : content["en"] ? content["en"] : content;
};
