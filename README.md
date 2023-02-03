# runlog

![wide_highfps](https://user-images.githubusercontent.com/17712488/216561670-199a79dc-2127-4c06-b54a-c0b8fd2cccf7.gif)


Nettisivu näyttää toteutuneet päivittäiset juoksulenkit.

Live: https://runlog-ten.vercel.app/

SSR Next.js
Styled-components
Google Sheets


Data synkronoidaan Apple Watchista HealthFit sovelluksella Google Sheets taulukkoon.

Taulukosta data luetaan Next.js getServerSideProps funktiossa palvelimella ja
datasta renderöidään selaimelle lähetettävä html.
