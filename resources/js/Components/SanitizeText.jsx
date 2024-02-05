import SanitizeHtml from 'sanitize-html';
import DOMPurify from 'dompurify';

const SanitizeText = ({text,config = null}) => {

	const defaultAllowedTag = ['h1','h2','h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
					  'nl', 'li', 'b', 'i','u', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
					  'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', "img"];

	const defaultConfig = {
		ALLOWED_TAGS: defaultAllowedTag, 

		ALLOWED_ATTR: ['style',"href","src"]
	}

	let  cleanText = DOMPurify.sanitize(text,config ? config : defaultConfig);

	return (
		<div 
			dangerouslySetInnerHTML={{ 
				__html: cleanText
			}}
		/> 
	)
}

export default SanitizeText;