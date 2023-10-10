export default function typeAliasSample (): void {
  // 型エイリアス
  interface Country {
    capitali: string
    language: string
    name: string
  }

  const japan: Country = {
    capitali: 'Tokyo',
    language: 'Japanese',
    name: 'Japan'
  }
  console.log('Object alias sample 1:', japan)

  const america: Country = {
    capitali: 'Washington, D.C',
    language: 'English',
    name: 'United States of America'
  }
  console.log('Object alias sample 2:', america)

  // 合併型(union)、交差型(intersection)
  interface Knight {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  interface Wizard {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型...KnightまたはWizardの型を持ちますよ
  type Adventurer = Knight | Wizard

  // 交差型...KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  const adventure1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り'
  }

  const adventure2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤボール'
  }
  console.log('Object alias sample 3:', adventure1)
  console.log('Object alias sample 4:', adventure2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連斬り',
    magicSkill: 'ファイヤボール'
  }
  console.log('Object alias sample 5:', paladin)
}
