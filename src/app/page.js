import Image from 'next/image'

export default function Home() {
  return (
    <>
    <h2>Welcome</h2>
      Hello, WEB!
      {/* public 폴더 아래 정적 이미지를 가져옴*/}
      <img src="/js-logo.png" alt=""/>
    </>
  )
}
