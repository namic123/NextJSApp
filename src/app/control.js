"use client";
import Link from "next/link";
import {useParams} from "next/navigation";

export function Control() {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <ul>
        <li>
          {/* create라는 폴더 안에 있는 page.js 파일에 라우팅됨. */}
          <Link href="/create">Create</Link>
        </li>
        {id? <>
          <li>
            <Link href={"/update/"+id}>Update</Link>
          </li>
          <li>
            <input type="button" value="delete"/>
          </li>
        </>:null}
      </ul>
    </>
  )
}