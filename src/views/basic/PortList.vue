<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="4" :sm="12">
            <a-form-item label="港口编号">
              <a-input placeholder="请输入" v-model="queryParam.portId"/>
            </a-form-item>
          </a-col>
          <a-col :md="4" :sm="12">
            <a-form-item label="港口名称">
              <a-input placeholder="请输入" v-model="queryParam.portName"/>
            </a-form-item>
          </a-col>
          <a-col :md="4" :sm="12">
            <a-form-item label="港口地址">
              <a-input placeholder="请输入" v-model="queryParam.portAddr"/>
            </a-form-item>
          </a-col>
          <a-col :md="4" :sm="12">
            <a-form-item label="所属地区">
              <a-select placeholder="请选择" v-model="queryParam.portRegion" default-value="''">
                <a-select-option :value="'CN'">中国</a-select-option>
                <a-select-option :value="'US'">美国</a-select-option>
                <a-select-option :value="'HK'">香港</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="18">
            <a-form-item label="创建时间">
              <a-range-picker v-model="range"/>
            </a-form-item>
          </a-col>
          <a-col :md="5" :sm="15">
            <span class="table-page-search-submitButtons">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="table-operator">
      <a-button v-if="addEnable" type="primary" icon="plus" @click="$refs.modal.add()">新建</a-button>
      <a-dropdown v-if="removeEnable && selectedRowKeys.length > 0">
        <a-button type="danger" icon="delete" @click="delByIds(selectedRowKeys)">删除</a-button>
      </a-dropdown>
    </div>
    <s-table
      size="default"
      ref="table"
      rowKey="portId"
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      :columns="columns"
      :data="loadData"
      :rangPicker="range"
      defaultSort="portId"
    >
      <span slot="portRegion" slot-scope="text">
        {{ text | typeFilter }}
      </span>
      <!-- <span slot="portValue" slot-scope="text">
        <ellipsis :length="20" tooltip>{{ text }}</ellipsis>&nbsp;
        <a-tooltip>
          <template slot="title">
            复制
          </template>
          <a @click="docopy(text)"><a-icon type="copy"></a-icon></a>
        </a-tooltip>
      </span> -->
      <span slot="action" slot-scope="text, record">
        <a v-if="editEnabel" @click="handleEdit(record)">编辑</a>
        <a-divider type="vertical" />
        <a v-if="removeEnable" @click="delByIds([record.portId])">删除</a>
      </span>
    </s-table>
    <!-- <config-modal ref="modal" @ok="handleOk"/> -->
  </a-card>
</template>

<script>
import { STable, Ellipsis } from '@/components'
import { delConfig } from '@/api/system'
import { checkPermission } from '@/utils/permissions'
export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis
  },
  data () {
    return {
      visible: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      form: this.$form.createForm(this),
      mdl: {},
      permissions: [],
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '港口编码',
          dataIndex: 'portId'
        },
        {
          title: '港口名称',
          dataIndex: 'portName'
        },
        {
          title: '港口地址',
          dataIndex: 'portAddr'
        },
        {
          title: '所属地区',
          dataIndex: 'portRegion',
          scopedSlots: { customRender: 'configValue' }
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          sorter: true
        },
        {
          title: '操作',
          width: '150px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      range: null,
      // 加载数据方法 必须为 Promise 对象
      // loadData: parameter => {
      //   return getConfigList(Object.assign(parameter, this.queryParam))
      // },
      loadData: parameter => {
        Promise(resolve => {
          return resolve({
            msg: 'success',
            total: 1,
            code: 0,
            rows: [
              {
                searchValue: null,
                createBy: 'admin',
                createTime: '2018-03-16 11:33:00',
                updateBy: '',
                updateTime: '2019-03-14 17:04:07',
                beginTime: null,
                endTime: null,
                params: {},
                configId: 99,
                configName: 'oss存储配置',
                configKey: 'sys.oss.cloudStorage',
                configType: 'Y',
                portId: 'P001',
                portName: 'Savannah GA',
                portAddr: 'USA',
                portRegion: 'US'
              }
            ],
            pageNum: 1
          })
        })
      },
      selectedRowKeys: [],
      selectedRows: [],
      addEnable: checkPermission('system:port:add'),
      editEnabel: checkPermission('system:port:edit'),
      removeEnable: checkPermission('system:port:remove')

    }
  },
  filters: {
    typeFilter (type) {
      const typeMap = {
        'CN': '中国',
        'US': '美国',
        'HK': '香港'
      }
      return typeMap[type]
    }
  },
  beforeCreate () {

  },
  created () {
    console.log(Promise(resolve => {
      return resolve({
        'msg': 'success',
        'total': 1,
        'code': 0,
        'rows': [
          {
            'searchValue': null,
            'createBy': 'admin',
            'createTime': '2018-03-16 11:33:00',
            'updateBy': '',
            'updateTime': '2019-03-14 17:04:07',
            'beginTime': null,
            'endTime': null,
            'params': {},
            'configId': 99,
            'configName': 'oss存储配置',
            'configKey': 'sys.oss.cloudStorage',
            'configType': 'Y',
            'portId': 'P001',
            'portName': 'Savannah GA',
            'portAddr': 'USA',
            'portRegion': 'US'
          }
        ],
        'pageNum': 1
      })
    }))
  },
  methods: {
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
      console.log(this.selectedRowKeys)
      console.log(this.selectedRows)
    },
    handleOk () {
      this.$refs.table.refresh(true)
    },
    handleEdit (record) {
      this.$refs.modal.edit(record)
    },
    delByIds (ids) {
      delConfig({ ids: ids.join(',') }).then(res => {
        if (res.code === 0) {
          this.$message.success(`删除成功`)
          this.handleOk()
        } else {
          this.$message.error(res.msg)
        }
        this.selectedRowKeys = []
      })
    },
    docopy (text) {
      this.$copyText(text).then(message => {
        this.$message.success('复制完毕')
      }).catch(err => {
        console.log('copy.err', err)
        this.$message.error('复制失败')
      })
    }
  },
  watch: {
    /*
      'selectedRows': function (selectedRows) {
        this.needTotalList = this.needTotalList.map(item => {
          return {
            ...item,
            total: selectedRows.reduce( (sum, val) => {
              return sum + val[item.dataIndex]
            }, 0)
          }
        })
      }
      */
  }
}
</script>
