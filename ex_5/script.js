
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
      method: 'POST',
      body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
  };




  // чтоб перебрать пары ключ значение
  let formData = new FormData();
  formData.append('key1', 'value1');
  formData.append('key2', 'value2');
  
  for(let [name, value] of formData) {
    alert(`${name} = ${value}`); 
  }
