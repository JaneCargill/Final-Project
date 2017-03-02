User.delete_all()
Friend.delete_all()

user_one = User.create(
{
  name: 'Jane',
  location: 'EH8 9QN',
  email: 'jane@email.com',
  password: 'password',
  password_confirmation: 'password'
  })

user_two = User.create(
{
  name: 'Ruth',
  location: 'EH1 2EL',
  email: 'ruth@email.com',
  password: 'password',
  password_confirmation: 'password'
  })

user_three = User.create(
{
  name: 'Jilly',
  location: 'G12 8RS',
  email: 'jilly@email.com',
  password: 'password',
  password_confirmation: 'password'
  })
user_four = User.create(
{
  name: 'Winnie',
  location: 'EH6 7AB',
  email: 'winnie@email.com',
  password: 'password',
  password_confirmation: 'password'
  })
user_five = User.create(
{
  name: 'Logan',
  location: 'EH11 1AN',
  email: 'logan@email.com',
  password: 'password',
  password_confirmation: 'password'
  })
user_six = User.create(
{
  name: 'Cameron',
  location: 'PA1 1HL',
  email: 'cammy@email.com',
  password: 'password',
  password_confirmation: 'password'
  })

user_two.friends.create(
{
  friend: user_three.name,
  location: user_three.location
  })

user_one.friends.create({
  friend: user_two.name,
  location: user_two.location
  })