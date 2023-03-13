import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12 justify-center">
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-center">
        <img src="/logoforweb.png" alt="Logo" className="my-3" />
      </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <Text variant="h1">Basking in the Bubble Helper</Text>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <Text className="text-zinc-600">
          I am here to help you bask in your bubble
        </Text>
      </div>
      </section>

      <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}} className="flex flex-col">
        <div className="lg:w-2/3">
          <Chat />
        </div>
</section>

    </Page>
  )
}

// Home.Layout = Layout

export default Home
