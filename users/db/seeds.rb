User.delete_all()
Friend.delete_all()

user_two = User.create(
{
  name: 'Ruth',
  email: 'ruth@email.com',
  password: 'password',
  password_confirmation: 'password'
  })

user_three = User.create(
{
  name: 'Jilly',
  email: 'jilly@email.com',
  password: 'password',
  password_confirmation: 'password'
  })

user_two.friends.create(
{
  friend: user_three.name
  })