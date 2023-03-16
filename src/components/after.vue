  <template>
    <el-form-item
        v-if="
            ['submit', 'close'].includes(listQuery.action_code) &&
            detailData.classify_type === 1 &&
            detailData.need_timeout_reason &&
            detailData.state === 2
        "
        label="超时原因类型："
        label-width="90px"
        prop="timeout_type_select"
    >
        <el-checkbox-group
            v-model="listQuery.timeout_type_select"
            @change="resetTimeoutReason(listQuery.timeout_type_select)"
        >
            <el-checkbox v-for="item in getTypeOption" :key="item.value" :label="item.value">{{
                item.label
            }}</el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <el-form-item
        v-if="
            ['submit', 'close'].includes(listQuery.action_code) &&
            detailData.classify_type === 1 &&
            detailData.need_timeout_reason &&
            detailData.state === 2 &&
            listQuery.timeout_type_select.includes(13)
        "
        label="超时原因："
        label-width="90px"
        prop="timeout_reasons"
    >
        <el-checkbox-group v-model="listQuery.timeout_reasons">
            <el-checkbox v-for="item in getTimeoutReasonOptions" :key="item.value" :label="item.value">{{
                item.label
            }}</el-checkbox>
        </el-checkbox-group>
        <el-input
            v-if="listQuery.timeout_reasons.includes(9)"
            v-model="timeoutReasonsOther"
            type="textarea"
            resize="none"
            rows="3"
        />
    </el-form-item>
</template>