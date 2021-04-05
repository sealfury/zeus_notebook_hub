import { Command } from 'commander'

export const serveCommand = new Command()
  .command('serve')
  .description('Open a file to edit')
  .action(() => {
    console.log('warming up...')
  })
