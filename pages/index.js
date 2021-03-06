import Layout from 'components/layout'

export default function Home({ data }) {
  return (
    <Layout title={`Notepad`}>
      <div className='flex flex-wrap gap-2'>
        {
          data.map(task => (
            <article key={task._id}
              className={`w-full h-full p-4 rounded-md transition-all relative
                      border-4 border-violet-400 hover:border-violet-500`}>
              <h2>
                <span className='font-bold'>Title:</span> {task.title}
              </h2>
              <h2>
                <span className='font-bold'>Description:</span> {task.description}
              </h2>
              <h2>
                <span className='font-bold'>Completed:</span> {task.completed.toString()}
              </h2>
            </article>
          ))
        }
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL + '/tasks')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
