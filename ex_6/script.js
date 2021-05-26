
  canvasElem.onmousemove = function(e) {
    let ctx = canvasElem.getContext('2d');
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };

  async function submit() {
    let imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

    let formData = new FormData();
    formData.append("firstName", "John");
    formData.append("image", imageBlob, "image.png");

    let response = await fetch('/article/formdata/post/image-form', {
      method: 'POST',
      body: formData
    });
    let result = await response.json();
    alert(result.message);
  }