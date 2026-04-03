<script lang="ts" setup>
import { Button, Dialog, Field } from "vant";
import { reactive, ref, computed, onMounted } from "vue";

defineOptions({
  name: "Login",
});

const showLoginDialog = ref(false);
function openLoginDialog() {
  showLoginDialog.value = true;
}

const userState = reactive({
  userName: "",
  password: "",
});

const isSetToken = ref(false);
const userInfo = ref(null);

const disabled = computed(() => !userState.userName || !userState.password);
const btnLoading = ref(false);

async function loginAccound() {
  if (disabled.value) return;
  const payload = {
    client_id: "resource-admin",
    client_secret: "1q2w3e*",
    grant_type: "erp_verify",
    erp_userName: userState.userName,
    erp_Password: userState.password,
  };
  btnLoading.value = true;
  try {
    const res = await fetch("http://test.cddc56.com:40102/connect/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: new URLSearchParams(payload),
    });
    const data = await res.json();
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      const strings = data.access_token.split(".");
      userInfo.value = JSON.parse(
        decodeURIComponent(
          escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/"))),
        ),
      );
      localStorage.setItem("CurUser", JSON.stringify(userInfo.value));

      isSetToken.value = true;
    }
    btnLoading.value = false;
    showLoginDialog.value = false;
  } catch (error) {
    console.error(error);
    btnLoading.value = false;
  }
}

onMounted(() => {
  const UserInfoStr = localStorage.getItem("CurUser");
  if (UserInfoStr) {
    const formatUserInfo = JSON.parse(UserInfoStr);
    userInfo.value = formatUserInfo;
    isSetToken.value = true;
  }
});
</script>
<template>
  <div class="login-btns">
    <Button
      v-if="!isSetToken"
      type="primary"
      size="small"
      @click="openLoginDialog"
      >请先登录</Button
    >
    <span v-else>欢迎回来，{{ userInfo?.given_name }}</span>
    <Dialog
      v-model:show="showLoginDialog"
      class="dc-login-dialog"
      :show-close="false"
    >
      <div>
        <div class="input-wrap">
          <label for="username" class="label"
            ><i class="required-symbol">*</i> 账号</label
          >
          <Field
            v-model="userState.userName"
            id="username"
            type="text"
            class="input"
            placeholder="请输入账号"
          >
          </Field>
        </div>
        <div class="input-wrap">
          <label for="password" class="label"
            ><i class="required-symbol">*</i> 密码</label
          >
          <Field
            v-model="userState.password"
            id="password"
            type="password"
            class="input"
            show-password
            placeholder="请输入密码"
            @keyup.enter="loginAccound"
          >
          </Field>
        </div>
        <div class="btns">
          <Button
            color="#626aef"
            size="large"
            :loading="btnLoading"
            :disabled="disabled"
            @keyup.enter="loginAccound"
            @click="loginAccound"
            >登录</Button
          >
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style lang="less" >
.login-btns {
  line-height: 64px;
}

@success-color: #55d18780; //  Success color
@error-color: #e74242; //  False color
@warning-color: #efbd47;
@white: white;
@disabled-color: #00000040;
.dc-login-dialog {
  width: 54% !important;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  .input-wrap {
    position: relative;
    &:nth-child(2) {
      margin-bottom: 2.6rem;
    }
  }
  .input {
    height: 40px !important;
    :deep(.el-input__wrapper) {
      background: #f2f3f5;
      box-shadow: none !important;
    }
  }
  .label {
    color: #c8c9cc;
    margin-bottom: 0.2rem;
    display: block;
    height: 2rem;
  }
  .primary-color {
    color: #1989fa;
    cursor: pointer;
  }
  .suffix-default {
    cursor: wait;
  }
  .btns {
    width: 100%;
    text-align: center;
    & > button {
      width: 80%;
    }
  }
  .hourglass-svg,
  .success-svg {
    width: 2rem;
    height: 2rem;
  }
  .hourglass-svg {
    animation: rotate 6s linear infinite;
  }

  .required-symbol {
    color: #c70303;
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
  }

  .strength-meter {
    &-bar {
      position: relative;
      height: 6px;
      margin: 10px auto 6px;
      background-color: @disabled-color;
      border-radius: 6px;

      &::before,
      &::after {
        position: absolute;
        z-index: 10;
        display: block;
        width: 20%;
        height: inherit;
        background-color: transparent;
        border-color: @white;
        border-style: solid;
        border-width: 0 5px;
        content: "";
      }

      &::before {
        left: 20%;
      }

      &::after {
        right: 20%;
      }

      &--fill {
        position: absolute;
        width: 0;
        height: inherit;
        background-color: transparent;
        border-radius: inherit;
        transition:
          width 0.5s ease-in-out,
          background 0.25s;

        &[data-score="0"] {
          width: 20%;
          background-color: @error-color;
        }

        &[data-score="1"] {
          width: 40%;
          background-color: @error-color;
        }

        &[data-score="2"] {
          width: 60%;
          background-color: @warning-color;
        }

        &[data-score="3"] {
          width: 80%;
          background-color: @success-color;
        }

        &[data-score="4"] {
          width: 100%;
          background-color: @success-color;
        }
      }
    }
  }
  .tips {
    font-size: 12px;
    color: red;
    margin: 0;
    position: absolute;
  }
}
</style>
