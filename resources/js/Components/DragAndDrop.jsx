import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'


const DragAndDrop = ({name,error,preValue, onChange, setError, setData}) => {

    const [file, setFile] = useState(null);

    const defaultImg = preValue ? preValue : null;

    const preview = file ? file.preview : defaultImg;

    const onDrop = useCallback((acceptedFiles) => {

      acceptedFiles.map( file => {
        const reader = new FileReader();
        const id = Date.now()
        reader.onload = (e) => {
            e.preventDefault()
            const type = file.type;

            if(!(type === 'image/jpeg' || type === 'image/jpg' || type === 'image/png')){
                setError(name,{
                    type : 'validate image',
                    message : "Invaid type of file, This field should be image"
                })
            }else{
                setFile({id:id, preview:e.target.result})
                setData('photo',file)
            }
        }
        reader.readAsDataURL(file)
      })

  }, [setData])


  const {
        getRootProps, 
        getInputProps,
        isDragAccept, 
        isFocused, 
        isDragReject
    } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
        'image/png': ['.png'], 
        'image/jpeg': ['.jpg', '.jpeg'],
        } 
    });

    const border = isDragAccept ? "border-blue-400" : "border-skin-secondary";

    return(
      <>
        <div
          className={`w-showConatiner w-[400px] h-[200px] rounded-lg  border-2 border-slate-200 my-4 relative cursor-pointer ${border} overflow-hidden flex items-center justify-center`}
          	{...getRootProps()}
          >
            <div className='flex flex-col gap-4 items-center justify-center'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                </div>
                <h3>
                    Drag & Drop Here
                </h3>
                <p>or</p>
                <button
                type='button'
                className='bg-blue-600 text-white rounded-md px-6 py-2 text-sm'
                >
                    Upload File
                </button>
            </div>

            {preview && (
               <img 
                src={preview} 
                alt="" 
                className="w-full h-full object-cover absolute"
                />
            )}

            <input 
            {...getInputProps()} 
            />
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </>
    )
}

export default DragAndDrop;