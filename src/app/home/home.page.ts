/* eslint-disable max-len */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PrivateMessagesService } from '../services/privateMessages.service';
import { PopoverComponent } from '../components/popover/popover.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 public isSearch = false;
 public chips: Chips[]=[
{
  name:'image',
  label: 'Fotos'
},
{
  name: 'videocam',
  label: 'Vídeos'
},
{
  name: 'link',
  label: 'Links'
},
{
  name: 'barcode',
  label: 'GIFs',
},
{
  name: 'headset',
  label: 'Áudio'
},
{
  name: 'document-text',
  label: 'Documentos'
}
 ];


  public users: Person[] = [
    {
      id: 1,
      firstName: 'Efrem Scoone',
      photo: 'https://robohash.org/magniofficiisqui.png?size=50x50&set=set1',
      message: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      hour: '19:08',
    },
    {
      id: 2,
      firstName: 'Genny Leinster',
      photo: 'https://robohash.org/molestiaeautodit.png?size=50x50&set=set1',
      message:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      hour: '1:50',
    },
    {
      id: 3,
      firstName: 'Rene Eggers',
      photo: 'https://robohash.org/velmaioresdolore.png?size=50x50&set=set1',
      message:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      hour: '18:34',
    },
    {
      id: 4,
      firstName: 'Melania Ellsworthe',
      photo:
        'https://robohash.org/doloribuseavoluptate.png?size=50x50&set=set1',
      message:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      hour: '10:35',
    },
    {
      id: 5,
      firstName: 'Blane Comrie',
      photo:
        'https://robohash.org/voluptateporrorepellendus.png?size=50x50&set=set1',
      message:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      hour: '21:53',
    },
    {
      id: 6,
      firstName: 'Dona Huge',
      photo: 'https://robohash.org/laborumseddicta.png?size=50x50&set=set1',
      message:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      hour: '19:13',
    },
    {
      id: 7,
      firstName: 'Stinky Filipczak',
      photo: 'https://robohash.org/quisdoloribusquas.png?size=50x50&set=set1',
      message:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      hour: '23:01',
    },
    {
      id: 8,
      firstName: 'Millie Reinhart',
      photo:
        'https://robohash.org/totamaccusantiumharum.png?size=50x50&set=set1',
      message:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      hour: '5:23',
    },
    {
      id: 9,
      firstName: 'Kale Van Geffen',
      photo: 'https://robohash.org/beataepariaturquia.png?size=50x50&set=set1',
      message:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      hour: '8:50',
    },
    {
      id: 10,
      firstName: 'Jeffy Kulvear',
      photo: 'https://robohash.org/nobisnonconsequatur.png?size=50x50&set=set1',
      message:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      hour: '19:33',
    },
    {
      id: 11,
      firstName: 'Olimpia Siccombe',
      photo: 'https://robohash.org/estveniamarchitecto.png?size=50x50&set=set1',
      message:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      hour: '22:45',
    },
    {
      id: 12,
      firstName: 'Bartholomew Strick',
      photo: 'https://robohash.org/distinctioquisquos.png?size=50x50&set=set1',
      message:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      hour: '15:58',
    },
    {
      id: 13,
      firstName: 'Bernhard Kidstoun',
      photo: 'https://robohash.org/facereametdelectus.png?size=50x50&set=set1',
      message: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
      hour: '4:39',
    },
    {
      id: 14,
      firstName: 'Ophelie Brosnan',
      photo: 'https://robohash.org/dolorilloculpa.png?size=50x50&set=set1',
      message:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      hour: '15:20',
    },
    {
      id: 15,
      firstName: 'Iorgo Lehrmann',
      photo: 'https://robohash.org/quiinsint.png?size=50x50&set=set1',
      message:
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      hour: '10:29',
    },
    {
      id: 16,
      firstName: 'Merrill Rosgen',
      photo: 'https://robohash.org/quisnullaet.png?size=50x50&set=set1',
      message:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      hour: '8:29',
    },
    {
      id: 17,
      firstName: 'Matteo Perree',
      photo:
        'https://robohash.org/ipsumdoloribusratione.png?size=50x50&set=set1',
      message:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      hour: '18:15',
    },
    {
      id: 18,
      firstName: 'Paulina Norcott',
      photo:
        'https://robohash.org/laboriosamipsamsoluta.png?size=50x50&set=set1',
      message:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      hour: '18:46',
    },
    {
      id: 19,
      firstName: 'Essie MacCaughey',
      photo: 'https://robohash.org/suntsolutaquia.png?size=50x50&set=set1',
      message:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      hour: '13:00',
    },
    {
      id: 20,
      firstName: 'Daisie Lansbury',
      photo: 'https://robohash.org/temporibussitaut.png?size=50x50&set=set1',
      message:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      hour: '18:11',
    },
    {
      id: 21,
      firstName: 'Jocelyne Dach',
      photo:
        'https://robohash.org/voluptatedolorumquia.png?size=50x50&set=set1',
      message:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
      hour: '10:17',
    },
    {
      id: 22,
      firstName: 'Louisette Connelly',
      photo: 'https://robohash.org/facerevelitaperiam.png?size=50x50&set=set1',
      message:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      hour: '4:37',
    },
    {
      id: 23,
      firstName: 'Camila Paten',
      photo: 'https://robohash.org/quiblanditiissaepe.png?size=50x50&set=set1',
      message:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
      hour: '1:38',
    },
    {
      id: 24,
      firstName: 'Bunni Sertin',
      photo:
        'https://robohash.org/cumquibusdamrepudiandae.png?size=50x50&set=set1',
      message:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      hour: '22:39',
    },
    {
      id: 25,
      firstName: 'Selena Churchard',
      photo: 'https://robohash.org/quinequedebitis.png?size=50x50&set=set1',
      message:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      hour: '12:45',
    },
    {
      id: 26,
      firstName: 'Melony Malafe',
      photo: 'https://robohash.org/eniminquaerat.png?size=50x50&set=set1',
      message:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      hour: '15:25',
    },
    {
      id: 27,
      firstName: 'Lennard Clemenzo',
      photo: 'https://robohash.org/molestiaeessevel.png?size=50x50&set=set1',
      message:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      hour: '18:32',
    },
    {
      id: 28,
      firstName: 'Bevan Mougel',
      photo: 'https://robohash.org/utpossimusmolestiae.png?size=50x50&set=set1',
      message:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      hour: '2:56',
    },
    {
      id: 29,
      firstName: 'Hamel Height',
      photo: 'https://robohash.org/oditeumtempore.png?size=50x50&set=set1',
      message:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      hour: '1:05',
    },
    {
      id: 30,
      firstName: 'Booth Harle',
      photo: 'https://robohash.org/fugainsaepe.png?size=50x50&set=set1',
      message:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      hour: '2:29',
    },
    {
      id: 31,
      firstName: 'Carlee Jodrelle',
      photo:
        'https://robohash.org/perferendislaborumsint.png?size=50x50&set=set1',
      message:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      hour: '22:30',
    },
    {
      id: 32,
      firstName: 'Ulick Todeo',
      photo: 'https://robohash.org/eaqueealibero.png?size=50x50&set=set1',
      message:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      hour: '23:16',
    },
    {
      id: 33,
      firstName: 'Mommy Digman',
      photo: 'https://robohash.org/voluptatemnemonihil.png?size=50x50&set=set1',
      message:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      hour: '18:08',
    },
    {
      id: 34,
      firstName: 'Ortensia Perford',
      photo: 'https://robohash.org/quaeratmollitiaaut.png?size=50x50&set=set1',
      message:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      hour: '7:15',
    },
    {
      id: 35,
      firstName: 'Wilie Birdall',
      photo: 'https://robohash.org/quiadoloreut.png?size=50x50&set=set1',
      message:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      hour: '17:09',
    },
    {
      id: 36,
      firstName: 'Doralia Helversen',
      photo: 'https://robohash.org/eosfacerequaerat.png?size=50x50&set=set1',
      message:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      hour: '21:10',
    },
    {
      id: 37,
      firstName: 'Edmon Bearne',
      photo: 'https://robohash.org/beataeenimlibero.png?size=50x50&set=set1',
      message:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      hour: '3:53',
    },
    {
      id: 38,
      firstName: 'Clemence Chatelet',
      photo: 'https://robohash.org/ametenimquis.png?size=50x50&set=set1',
      message:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      hour: '23:48',
    },
    {
      id: 39,
      firstName: 'Amelina Kinnach',
      photo:
        'https://robohash.org/voluptatemmaioresvel.png?size=50x50&set=set1',
      message:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      hour: '18:50',
    },
    {
      id: 40,
      firstName: 'Jennilee Zanioletti',
      photo: 'https://robohash.org/fugitsuntaut.png?size=50x50&set=set1',
      message:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      hour: '10:08',
    },
    {
      id: 41,
      firstName: 'Northrup Lisciandro',
      photo: 'https://robohash.org/solutaomnisplaceat.png?size=50x50&set=set1',
      message:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      hour: '15:44',
    },
    {
      id: 42,
      firstName: 'Rurik Dougher',
      photo: 'https://robohash.org/estminimaeum.png?size=50x50&set=set1',
      message:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      hour: '5:08',
    },
    {
      id: 43,
      firstName: 'Suzanne Brind',
      photo: 'https://robohash.org/quiaquisoptio.png?size=50x50&set=set1',
      message:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      hour: '15:23',
    },
    {
      id: 44,
      firstName: 'Crissie Stitwell',
      photo: 'https://robohash.org/autessevitae.png?size=50x50&set=set1',
      message:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      hour: '16:28',
    },
    {
      id: 45,
      firstName: 'Harrietta Dyment',
      photo: 'https://robohash.org/eaeumaut.png?size=50x50&set=set1',
      message:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
      hour: '19:57',
    },
    {
      id: 46,
      firstName: 'Ginevra Pacher',
      photo:
        'https://robohash.org/asperiorescumqueenim.png?size=50x50&set=set1',
      message:
        'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      hour: '21:12',
    },
    {
      id: 47,
      firstName: 'Livy Veal',
      photo: 'https://robohash.org/enimlaboriosamesse.png?size=50x50&set=set1',
      message:
        'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      hour: '12:47',
    },
    {
      id: 48,
      firstName: 'Leonardo Pavlov',
      photo:
        'https://robohash.org/estvoluptatibusfacilis.png?size=50x50&set=set1',
      message:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      hour: '6:47',
    },
    {
      id: 49,
      firstName: 'Borden Hamstead',
      photo: 'https://robohash.org/estestnulla.png?size=50x50&set=set1',
      message:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      hour: '1:17',
    },
    {
      id: 50,
      firstName: 'Dode Castelletti',
      photo:
        'https://robohash.org/voluptatemaliquidrerum.png?size=50x50&set=set1',
      message:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      hour: '14:09',
    },
  ];
  selectedTabs = 'home';
  constructor(
    public privateMessagesService: PrivateMessagesService,
    public router: Router,
    private popOverCtrl: PopoverController
  ) {}



  handleSearch(){
    this.isSearch = !this.isSearch;
  }

segmentChanged(e: any){
  console.log(e.target.value);
  this.router.navigateByUrl(e.target.value);
}

  exibirMensagem(user: Person){
    this.privateMessagesService.guardarDados('id', user);
    this.router.navigateByUrl('private-message');
  }

  async tooglePopOver(ev: any) {
    const popOver = await this.popOverCtrl.create({
      component: PopoverComponent,
      cssClass: 'my-popover-class',
      event: ev,
    });

    popOver.onDidDismiss().then(data=> console.log(data));

    return await popOver.present();
  }

}

export type Person = {
  id: number;
  firstName: string;
  photo: string;
  message: string;
  hour: string;
};

export type Chips = {
  name: string;
  label: string;
};
