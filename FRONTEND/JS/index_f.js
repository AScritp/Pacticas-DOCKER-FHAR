  function inicio(){
      axios.get('https://mydockerava-production.up.railway.app/productos', {
          responseType: 'json'
        })
          .then(function(res) {
            if(res.status==200) {
              console.log(res);
            var element = res.data;
              dibuja(element);
            } 
          })
          .catch(function(err) {
            console.log(err);
          })
          
      }

  function dibuja(element){
      const body=document.getElementsByTagName('body')[0];
      element.forEach(element => {
          const div = document.createElement('div');
          const paragf_1 = document.createElement('p');
          const paragf_2 = document.createElement('p');
          const paragf_3 = document.createElement('p');
          // const paragf_4 = document.createElement('p');
          paragf_1.textContent = element.id;
          paragf_2.textContent = element.nombre;
          paragf_3.textContent = element.precio;
          // paragf_4.textContent = element.description;
          div.appendChild(paragf_1);
          div.appendChild(paragf_2);
          div.appendChild(paragf_3);
          // div.appendChild(paragf_4);
          body.appendChild(div);
      });
  }

  document.addEventListener('DOMContentLoaded', inicio);