import avatar from '../../../assets/10.jpeg'

const Person = ({ name, nickName = 'Yanski', images }) => {
  // const img = images && images[0] && images[0].small && images[0].small.url;
  // const img = images?.[0] ?.small?.url || avatar;
  const img = images?.[0] ?.small?.url ?? avatar;

  return (
    <div>
      <h2 style={{ textDecoration: 'underline' }}>People Component</h2>

      <h2>Name: {name}</h2>
      <h3>Nickname: {nickName}</h3>
      <img src={img} alt={name} style={{width: '50px'}} />
    </div>
  )
}

export default Person
