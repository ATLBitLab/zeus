import * as React from 'react';
import { Provider } from 'mobx-react';

import Stores from './stores/Stores';
import Navigation from './Navigation';
import NavigationService from './NavigationService';
import PushNotificationManager from './PushNotificationManager';
import { AppContainer } from './components/layout/AppContainer';
import ExternalLinkModal from './components/Modals/ExternalLinkModal';
import AndroidNfcModal from './components/Modals/AndroidNfcModal';
import InfoModal from './components/Modals/InfoModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider
                BalanceStore={Stores.balanceStore}
                TransactionsStore={Stores.transactionsStore}
                ChannelsStore={Stores.channelsStore}
                NodeInfoStore={Stores.nodeInfoStore}
                InvoicesStore={Stores.invoicesStore}
                SettingsStore={Stores.settingsStore}
                FiatStore={Stores.fiatStore}
                UnitsStore={Stores.unitsStore}
                PaymentsStore={Stores.paymentsStore}
                FeeStore={Stores.feeStore}
                LnurlPayStore={Stores.lnurlPayStore}
                UTXOsStore={Stores.utxosStore}
                MessageSignStore={Stores.messageSignStore}
                ActivityStore={Stores.activityStore}
                PosStore={Stores.posStore}
                InventoryStore={Stores.inventoryStore}
                ModalStore={Stores.modalStore}
                NotesStore={Stores.notesStore}
                SyncStore={Stores.syncStore}
                LSPStore={Stores.lspStore}
                LightningAddressStore={Stores.lightningAddressStore}
                ChannelBackupStore={Stores.channelBackupStore}
            >
                <AppContainer>
                    <PushNotificationManager>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <Navigation
                                ref={(navigatorRef) => {
                                    NavigationService.setTopLevelNavigator(
                                        navigatorRef
                                    );
                                }}
                            />
                            <ExternalLinkModal />
                            <AndroidNfcModal />
                            <InfoModal />
                        </GestureHandlerRootView>
                    </PushNotificationManager>
                </AppContainer>
            </Provider>
        );
    }
}
