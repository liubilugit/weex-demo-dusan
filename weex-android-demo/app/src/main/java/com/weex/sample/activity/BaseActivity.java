package com.weex.sample.activity;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;
import com.weex.sample.Constants;
import com.weex.sample.R;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.Unbinder;

public abstract class BaseActivity extends AppCompatActivity implements IWXRenderListener {
    protected WXSDKInstance mWXSDKInstance;
    @BindView(R.id.container)
    protected FrameLayout mContainer;
    protected Context mContext;
    protected View rootView;
    protected Unbinder unbinder;
    protected static final int RENDER_TYPE_LOCAL = 10;
    protected static final int RENDER_TYPE_NETWORK = 11;
    protected String pageName = "weex";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_network);
        mContext = this;
        int layoutId = getLayoutResId();
        //初始化butterknife
        if (layoutId > 0) {
            rootView = LayoutInflater.from(this).inflate(layoutId, null);
            setContentView(rootView);
            unbinder = ButterKnife.bind(this);
        }
        initData();
        initView();

        startRenderPage();
        registerWeexReceiver();
    }

    private void registerWeexReceiver() {
        registerReceiver(receiver, new IntentFilter(Constants.BC_ACTION_RENDER_NET_JS));
    }

    private BroadcastReceiver receiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            Log.d("dq", "received broadcast" + action);
            if (Constants.BC_ACTION_RENDER_NET_JS.equals(action)) {
                String url = intent.getStringExtra("url");
                if (!TextUtils.isEmpty(url)) {
                    pageName = "newPage" + new Random().nextInt() + 10;
                    renderNetWeexPage(url);
                }
            }
        }
    };

    protected void initView() {
    }

    protected void initData() {
    }

    protected abstract void startRenderPage();

    protected void renderNetWeexPage(String jsUrl) {
        if (TextUtils.isEmpty(jsUrl)) {
            return;
        }
        renderWeexPage(RENDER_TYPE_NETWORK, jsUrl, null);
    }

    protected void renderLocalWeexPage(String jsName) {
        if (TextUtils.isEmpty(jsName)) {
            return;
        }
        renderWeexPage(RENDER_TYPE_LOCAL, Constants.LOCAL_FILE_SCHEMA + jsName, jsName);
    }

    public abstract int getLayoutResId();

    protected void renderWeexPage(int render_type, String jsUrl, String jsName) {
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
        Map<String, Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, jsUrl);
        pageName = jsName;
        if (render_type == RENDER_TYPE_NETWORK) {
            mWXSDKInstance.renderByUrl(pageName, jsUrl, options, null, WXRenderStrategy.APPEND_ONCE);
        } else if (render_type == RENDER_TYPE_LOCAL) {
            mWXSDKInstance.render(pageName, WXFileUtils.loadAsset(jsName, this), null, null, WXRenderStrategy.APPEND_ASYNC);
        }
        //mWXSDKInstance.render(pageName, jsUrl, null, null, WXRenderStrategy.APPEND_ASYNC);
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStart();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        try {
            if (mWXSDKInstance != null) {
                mWXSDKInstance.onActivityDestroy();
            }
        } catch (Exception e) {
            //容易出错
            e.printStackTrace();
        }
        if (getLayoutResId() > 0 && unbinder != null) {
            unbinder.unbind();
        }
        if (receiver != null) {
            unregisterReceiver(receiver);
            receiver = null;
        }
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        if (view.getParent() != null) {
            ((ViewGroup) view.getParent()).removeView(view);
        }
        if (mContainer != null) {
            mContainer.addView(view);
        }
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }
}
