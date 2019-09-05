import { Modal } from 'iview'

const beforeClose = {
  before_close_normal: (resolve) => {
    Modal.confirm({
      title: '确定要关闭这一页吗',
      onOk: () => {
        console.log('lilinjie')
        resolve(true)
      },
      onCancel: () => {
        resolve(false)
      }
    })
  }
}

export default beforeClose
