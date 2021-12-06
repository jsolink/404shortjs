// let params = new URLSearchParams(location.search);
// let redirect = params.get('r')

let redirect = window.location.pathname.slice(1)

if (fourofour_book_location){
  fetch_data_and_go(fourofour_book_location)
}

function redirect_go(book){
  if (redirect !== null && book[redirect] !== '' && book[redirect] !== undefined) {
    window.location.replace(book[redirect])
  } else {
    if (fourofour_defaultLink) {
      if (fourofour_defaultLink_delay){
        setTimeout(() => {
          window.location.replace(fourofour_defaultLink)
        }, fourofour_defaultLink_delay*1000);
      }else{
        window.location.replace(fourofour_defaultLink)
      }
    }
  }
}

async function fetch_data_and_go(path){
  await fetch(path).then(async (res) => {
    return await res.json()
  }).then((book)=>{
    redirect_go(book)
  })
}