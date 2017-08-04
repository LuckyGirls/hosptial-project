<template>
	<div class="inOne-records">
		<div class="inOne-TabRecords">
		  <h3>主诉:</h3>
		  <p>发热，感到不舒服，之前几天一直睡不着，吃了药也没用............</p>
		</div>
		<div class="inOne-TabRecords">
		  <h3>病史:</h3>
		  <textarea placeholder="请输入....."></textarea>
		</div>
		<div class="inOne-TabRecords">
		  <h3>体格检查:</h3>
		  <textarea placeholder="请输入....."></textarea>
		</div>
		<div class="inOne-TabRecords">
		  <h3>辅助检查及治疗:</h3>
		  <textarea placeholder="请输入....."></textarea>
		</div>
		<div class="inOne-TabRecords inOne-NoRecords">
		  <h3>诊断:</h3>
		  <p></p>
		</div>
	</div>
</template>

<style>
	.inOne-TabRecords{
	    padding-top: 30px;
	    padding-bottom: 30px;
	    border-bottom: 1px solid #dcdcdc;
  	}
	.inOne-NoRecords{
	    border-bottom: none;
	}
  	.inOne-TabRecords h3,.inOne-TabRecords p{
    	margin: 0;
  	}
  	.inOne-TabRecords p{
    	margin-left: 20px;
  	}
  	.inOne-TabRecords h3{
	    float: left;
	    font-size: 18px;
	    font-weight: normal;
	    width: 10%;
  	}
  	.inOne-TabRecords p{
	   	width: 75%;
	    display: inline-block;
	    white-space: pre-wrap;
	    color: #646a6b;
  	}
  	.inOne-TabRecords textarea{
	    width: 80%;
	    display: inline-block;
	    white-space: pre-wrap;
	    color: #646a6b;
	    height: 100px;
	    margin-left: 20px;
  	}
</style>