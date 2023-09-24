import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container'
import React from 'react'
export const revalidate =0;

const HomePage = async() => {
  const billboard = await getBillboard("176bb9bf-cde7-4da7-98c9-2e872b92a1e7")
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard}/>
      </div>
    </Container>
  )
}

export default HomePage