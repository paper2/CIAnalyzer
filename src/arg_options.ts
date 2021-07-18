import path from 'path'

type Argv = {
  [x: string]: unknown
}

export class ArgumentOptions {
  onlyServices?: string[]
  debug: boolean
  configPath: string
  configDir: string
  onlyExporters?: string[]

  constructor(argv: Argv) {
    this.configPath = path.resolve(argv['c'] as string)
    this.onlyServices = argv['only-services'] as string[]
    this.debug = argv['debug'] as boolean
    this.configDir = path.dirname(this.configPath)
    this.onlyExporters = argv['only-exporters'] as string[]
  }
}