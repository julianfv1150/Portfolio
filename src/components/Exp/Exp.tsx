import up from '../../assets/up.png'
import styles from './Exp.module.scss'

const Exp = () => {

    return(<>
        <br /><br />
        <h2 className={styles.title}>EXP <img src={up}></img></h2>
        <div className={styles.exp}>
            <div className={styles.contText}>
                <ul>
                    <li>
                        <h2>Soy Henry</h2>
                        <p>(Dic. 2023 - Abr. 2024)</p>
                        <p>FullStack Developer.</p>
                        <p>Desarrollo de aplicaciones web FullStack Developer.</p>
                        <span>TECHS: HTML CSS JS REACT NODE POSTGRESQL SCRUM.</span>
                    </li>
                    <li>
                        <h2>ISFTyD N°20</h2>
                        <p>(2014 - 2016)</p>
                        <p>Tecnico superior en análisis, programación y desarrollo de aplicaciones.</p>
                        <p>Completé dos de tres años con finales aprobados. </p>
                        <span>TECHS: HTML CSS PHP JAVA(Eclipse Galileo) MySQL SQL Server C#</span>
                    </li>
                </ul>
            </div>
            <div className={styles.contText}>
                <ul>
                    <li>
                        <h2>Bios</h2>
                        <p>(Jun. 2022 - Sept. 2023) | Telecomunicaciones - Co-Jefe</p>
                        <p>Trabajé brindando asistencia remota al usuario a través de tickets con el equipo 
                        organizando las tareas y gestionando incidencias. Tecnologías y herramientas: JIRA, 
                        FORTINET, CISCO, UBIQUITI, VNC y RDP</p>
                    </li>
                    <li>
                        <h2>Autónomo</h2>
                        <p>(Abr. 2019 - Abr. 2022) | Técnico informático.</p>
                        <p>Servicio a casas informáticas que necesitaban un técnico para atender a clientes 
                        on-site, abarcando desde microinformática hasta redes.</p>
                    </li>
                    <li>
                        <h2>Montanari Automotores S.A.</h2>
                        <p>(Ene 2016 - Dic. 2018) | Técnico informático.</p>
                        <p>Reparación y mantenimiento de redes, hardware y software de equipos, cámaras
                        de seguridad, dispositivos de control de ingreso/egreso. Asistencia al usuarios.</p>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}

export default Exp