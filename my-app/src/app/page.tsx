import Image from 'next/image'
import {getName} from '../../../common/Name'

export default function Home() {
  const name = getName()
  return (
    <main>{name}</main>
  )
}
