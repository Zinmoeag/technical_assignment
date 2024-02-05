import { ToastContainer, toast } from 'react-toastify';

export const makeTable = (array, header) => {
    const modifiedFormat = header.map(item => item.acessor)

    const data = [];
    array.forEach(item => {

      let newObj = {};
      modifiedFormat.forEach((key) => {
        newObj[key] = item[key];
      })

      data.push(newObj);
    })

    return {header, data}
}

export const UserDisplayText = (text) => {

	const array = text.split(' ')
	const twoItemArray = [];

	if(array.length > 1){
		for(let i = 0; i < 2 ; i++){
			twoItemArray.push(array[i][0])
		}
	}else{
		twoItemArray.push(array[0][0])
	}

	return twoItemArray.join("").toUpperCase();
}

export const showToast = (text) => {
	toast(text, {
		position: "bottom-left",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});
}