import React from 'react'
import { PetList } from './components/PetList'
import { Route, Switch, Link } from 'wouter'
import { PetPage } from './components/PetPage'
import { getPets } from './api'

export function App() {
  return (
    <div className="app">
      <header>
        <Link to="/">
          <h1>Melissa&apos;s Tamagotchi Zoo</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/" component={PetList} />
          <Route path="/api/Pets/:id" component={PetPage} />
          <Route>Ooopsie&hellip; You is lost&hellip;</Route>
        </Switch>
      </main>
    </div>
  )
}
console.log(getPets())
