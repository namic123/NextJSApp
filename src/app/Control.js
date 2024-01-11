"use client";
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";

export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  return (
    <>
      <ul>
        <li>
          {/* create라는 폴더 안에 있는 page.js 파일에 라우팅됨. */}
          <Link href="/create">Create</Link>
        </li>
        {id ? (<>
          <li>
            <Link href={"/update/"+id}>Update</Link>
          </li>
          <li>
            <button onClick={async ()=>{
              const resp = await fetch(`http://localhost:9999/topics/${id}`, {
                method: 'DELETE',
              });
              await resp.json();
              router.push('/');
              router.refresh();
            }}>delete</button>
          </li>
        </>):(<></>)}
      </ul>
    </>
  )
}