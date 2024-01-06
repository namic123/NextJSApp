export default async function Read(props){
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const topic = await resp.json();
  return (
    /* URL이 /read/1 ~ /read/1000000 와 같은 경우, read폴더 안에 id폴더 안에 page.js가 들어간다. */
    /* 이때, id는 props.params.id로 불러옴 */
    <>
    <h2>{topic.title}</h2>
      {topic.body}
  </>)
}