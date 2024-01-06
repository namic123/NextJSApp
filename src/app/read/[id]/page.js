export default function Read(props){
  return (
    /* URL이 /read/1 ~ /read/1000000 와 같은 경우, read폴더 안에 id폴더 안에 page.js가 들어간다. */
    /* 이때, id는 props.params.id로 불러옴 */
    <>
    <h2>Read</h2>
    parameters : {props.params.id}
  </>)
}