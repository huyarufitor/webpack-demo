 <template v-if="PROCESSING_OVERTIME_ENUM.includes(listQuery.action_code) && detailData.need_timeout_reason">
    <el-form-item label="超时原因类型：" label-width="90px" prop="timeout_type_select">
        <el-checkbox-group v-model="listQuery.timeout_type_select">
            <el-checkbox v-for="item in getTypeOption" :key="item.value" :label="item.value">{{
                item.label
            }}</el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <el-form-item label="超时原因：" label-width="90px" prop="timeout_reason">
        <el-input v-model="listQuery.timeout_reason" type="textarea" resize="none" rows="3" />
    </el-form-item>
</template>