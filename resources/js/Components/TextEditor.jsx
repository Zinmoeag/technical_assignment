import ReactQuill from 'react-quill';
import {createRef, useState} from "react";
import 'react-quill/dist/quill.snow.css';


const textRef = createRef(null);

export default function TextEditor({label, error, setData, value}){
	const modules = {
		toolbar:[
		  [{ 'header': [1, 2, 3, false] }],
	      ['bold', 'italic', 'underline','strike', 'blockquote'],
	      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
	      ['link', 'image'],
	      ['clean']
		]
	}
	
	return (

		<div>
			<p className="text-skin-fourth pb-2">{label}</p>
			<ReactQuill 
				theme="snow"
				defaultValue={value}
				onChange={(value) => setData(value)}
				modules={modules}
				className="w-showContainer text-skin-fourth"
			/>
			{error && <p className="text-red-600">{error}</p>}
		</div>
		
	)
}