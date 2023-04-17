<!-- FTP账号设置 -->
<template>
  <div class="app-container container bg-gray">
    <div v-if="type == 'home'">
      <div class="bg-gray-light padding-default">
        <div class="title">FTP账号管理</div>
      </div>
      <div class="padding-default bg-white">
        <el-row class="flex justify-end">
          <el-button @click="toAdd"><i
              class="el-icon-plus"></i>添加FTP账号</el-button>
          <el-button><i class="el-icon-edit"></i>编辑</el-button>
          <el-button><i class="el-icon-delete"></i>删除</el-button>
        </el-row>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%; margin-top: 20px; margin-bottom: 50px;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            min-width="10%"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户名"
            min-width="30%"
          >
          </el-table-column>
          <el-table-column
            prop="mechanism"
            label="所属机构"
            min-width="30%"
          >
          </el-table-column>
          <el-table-column
            prop="catalogue"
            label="主目录"
            min-width="30%"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div v-if="type == 'add'">
      <div class="bg-gray-light padding-default">
        <div class="title">添加FTP账号</div>
      </div>
      <div class="padding-default bg-white">
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          style="margin: 10px 20px; max-width: 600px;"
        >
          <el-form-item label="FTP账号">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="选择机构">
            <el-select
              v-model="form.mechanism"
              placeholder="请选择机构"
            >
              <el-option
                label="永阳新区小学"
                value="01"
              ></el-option>
              <el-option
                label="永阳老区小学"
                value="02"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="onSubmit">保存</el-button>
            <el-button @click="toBack">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchList } from '@/api/article'

export default {
  data() {
    return {
      type: 'home',
      tableData: [{
        name: 'admin',
        mechanism: '永阳新区小学',
        catalogue: '/opt/datas/upload/ftp/2dsj49h3xj7932vhg34v3'
      }, {
        name: 'admin',
        mechanism: '永阳新区小学',
        catalogue: '/opt/datas/upload/ftp/2dsj49h3xj7932vhg34v3'
      }, {
        name: 'admin',
        mechanism: '永阳新区小学',
        catalogue: '/opt/datas/upload/ftp/2dsj49h3xj7932vhg34v3'
      }],
      multipleSelection: [],
      form: {
        username: '',
        password: '',
        mechanism: ''
      }
    }
  },

  created() {
    this.getData()
  },

  methods: {

    getData() {
      fetchList().then(response => {
        console.log('fetchList', response.data.items)
        // this.list1 = response.data.items.splice(0, 5)
        // this.list2 = response.data.items
      })
    },

    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.multipleTable.clearSelection();
    //   }
    // },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    toAdd() {
      this.type = 'add'
    },

    toBack() {
      this.type = 'home'
    },

    onSubmit() {
      console.log('onSubmit', this.form)
    }
  }
}
</script>

<style scoped>
.container {
  height: calc(100vh - 85px);
}

.title {
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  padding-left: 5px;
  border-left: 3px solid #1397EB;
}
</style>
