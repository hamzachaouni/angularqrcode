import { BeforeLoginService } from './services/before-login.service';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/adminComponents/admin-home/admin-home.component';
import { SettingQrcodeComponent } from './components/adminComponents/setting-qrcode/setting-qrcode.component';
import { ShowQrcodeComponent } from './components/visitorComponents/show-qrcode/show-qrcode.component';
import { CreateQrcodeComponent } from './components/visitorComponents/create-qrcode/create-qrcode.component';
import { HomeComponent } from './components/visitorComponents/home/home.component';
import { LoginComponent } from './components/visitorComponents/login/login.component';
import { RegisterComponent } from './components/visitorComponents/register/register.component';
import { BlogComponent } from './components/visitorComponents/blog/blog.component';
import { SupportComponent } from './components/visitorComponents/support/support.component';
import { WhyqrcodesComponent } from './components/visitorComponents/whyqrcodes/whyqrcodes.component';
import { DowloadsComponent } from './components/userComponents/dowloads/dowloads.component';

const routes: Routes = [

    /* start routes admin */
    { path:"admin/home", component: AdminHomeComponent },
    { path:"admin/setting/qrcode", component: SettingQrcodeComponent },
    /* end routes admin */

    /* start routes user */
    /* end routes user */

    /* start routes visitor */
    { path:"show/qrcode", component: ShowQrcodeComponent },
    { path:"create/qrcode/:id", component: CreateQrcodeComponent },
    /* end routes visitor */

    { path:" ", component: HomeComponent },
    { path:"home", component: HomeComponent },
    { path:"login", component: LoginComponent, canActivate: [BeforeLoginService] },
    { path:"register", component: RegisterComponent, canActivate: [BeforeLoginService] },
    { path:"qrcode/dowload", component: DowloadsComponent },
    { path:"blog", component: BlogComponent },
    { path:"hamza", component: DowloadsComponent, canActivate: [AuthGuardGuard] },
    { path:"support", component: SupportComponent },
    { path:"why-qr-codes", component: WhyqrcodesComponent },





];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuardGuard]
})

export class RoutingModule {}