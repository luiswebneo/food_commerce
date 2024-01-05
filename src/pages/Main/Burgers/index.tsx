import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snack"

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description:
      'O artesanal tamanho familia recheado com trẽs carnes suculentas, queijo e bacon.',
      price: 25.90,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra Bacon',
      description:
      ' Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
      price: 23.90,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
  ]

  console.log('data', data)

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
   </>
  )
}
