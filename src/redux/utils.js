
export const VISIBILITY_FILTER = {
  ALL : 'all',
  IMCOMPLETED : "incompleted",
  COMPLETED : "completed" 
}


  export const initialStateDb = fetch('http://localhost:8000/')
    .then( async function(response){
      return await response.json();
      }
    )
    .catch((error) => {
      alert(error)
    }) 
  