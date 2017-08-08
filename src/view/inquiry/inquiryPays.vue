<template>
	<div class="inOne-pay">
		<div>
			<el-table :data="drugDatas" border style="width: 100%">
				<el-table-column align="center" label='选择' width="100">
		      		<template scope="props">
		        		<el-checkbox v-model="props.row.isactive"></el-checkbox>
		    		</template>
		  		</el-table-column>
				
				<el-table-column align="center" label='分类' width="200" >
		      		<template scope="props">
		        		{{ props.row.id }}
		    		</template>
		  		</el-table-column>

		  		<el-table-column align="center" label='价钱(元)' width="200">
		      		<template scope="props">
		        		{{ props.row.costSpend }}
		    		</template>
		  		</el-table-column>

		  		<el-table-column align="center" label ='费用明细' width="180">
		      		<template scope="props">
						<el-button size="small" type="primary" @click="handleDetail(props.$index, props.row)" icon="document">详情</el-button>
		    		</template>
		  		</el-table-column>
			</el-table>
		</div>

		<div class="AllTotal">
			<h2>总价：{{ total() }}</h2>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
		    return {
		    	drugDatas: [{
		    		id:'挂号费',
		    	    name: '1',
		    	    price: 300,
					costSpend:32,
		    	    isactive:false
		    	},{
		    		id:'医药费',
		    	    name: '2',
		    	    price: 400,
		    	    costSpend:800,
		    	    isactive:false
		    	},{
		    		id:'材料费',
		    	    name: '3',
		    	    price: 250,
		    	    costSpend:2.1,
		    	    desc: '荷兰优质淡奶，奶香浓而不腻',
		    	    isactive:false
		    	}]
		    }
		},
	  	methods:{
	  		handleDetail(index, row) {
      			console.log(index, row);
    		},
		    total: function(){
		        var total = 0;
		        this.drugDatas.forEach(function(s){
		            if (s.isactive){
		            	total+= s.costSpend;
		            }
		        });
		        return total;
		    }
		}
	}
</script>

<style>
	.active{
		background: blue;
	}
	.costDetail{
		font-weight: bold;
	}
	.AllTotal{
		margin-top: 50px;
		float: right;
		margin-right: 150px;
	}
	.AllTotal h2{
		height: 56px;
		line-height: 56px;
		color: #20a0ff;
		font-size: 20px;

	}
</style>