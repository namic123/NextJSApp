export default function Layout(props){
  return(
    <>
      {/* 만약 create 폴더 안에 layout.js가 없을 경우 부모 폴더의 layout.js children에 라우팅됨. */}
      {/* props.children에는 create 폴더의 page.js가 라우팅됨. */}
    <form>
      <h2>Create</h2>
      {props.children}
    </form>
    </>
  )
}