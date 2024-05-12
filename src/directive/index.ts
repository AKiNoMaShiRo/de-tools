import drag from './drag'

const directiveList = {
  drag,
}

const directives = {
  install: (app: any) => {
    Object.keys(directiveList).forEach((key: string) => {
      app.directive(key, directiveList[key])
    })
  },
}
export default directives
