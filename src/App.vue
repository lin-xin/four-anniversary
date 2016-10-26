<template>
	<div class="main">
		<!--<router-view transition="fade" transition-mode="out-in"></router-view>-->
		<router-view></router-view>
	</div>
</template>
<style>
	.fade-transition {
	    transition: opacity 0.2s ease;
	}
	.fade-enter, .fade-leave {
	    opacity: 0;
	}
	@-webkit-keyframes fadeIn {
	    from {
	        opacity: 0;
	    }
	    to {
	        opacity: 1;
	    }
	}
	@keyframes fadeIn {
	    from {
	        opacity: 0;
	    }
	    to {
	        opacity: 1;
	    }
	}
</style>

